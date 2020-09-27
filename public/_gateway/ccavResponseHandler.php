<html>
<head>
<title>Redirecting...</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
.center{
	height: 90vh;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
	text-align: center;
}
.loader {
	display: block;
	margin: 0.5em auto;
    border: 2px solid #17a2b8;
    border-radius: 50%;
	border-left: 2px solid #FFFFFF;
    width: 30px;
    height: 30px;
    -webkit-animation: spin 1s linear infinite;
    animation: spin 1s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
</head>
<body>
<?php include('Crypto.php')?>
<?php

	error_reporting(0);
	
	$workingKey='EB779F6C58F2C0FFDD4BC0174F62B0DD';		//Working Key should be provided here.
	$encResponse=$_POST["encResp"];			//This is the response sent by the CCAvenue Server
	$rcvdString=decrypt($encResponse,$workingKey);		//Crypto Decryption used as per the specified working key.
	$order_status="";
	$success = false;
	$decryptValues=explode('&', $rcvdString);
	$dataSize=sizeof($decryptValues);
	$required = ['order_id' => 'order_id', 'tracking_id' => 'txn_id', 'merchant_param1' => 'api','merchant_param2' => 'param'];
	$apiParam = ['redirect' => 'http://localhost:3000/checkout'];
	
	for($i = 0; $i < $dataSize; $i++) 
	{
		$information=explode('=',$decryptValues[$i]);
		if(isset($required[$information[0]])) $apiParam[$required[$information[0]]] = str_replace('@', '&', str_replace('|', '=', $information[1])) ; // Api request to store order
		if($i==3)	$order_status=$information[1];
	}
	
	echo "<div id='res' class='center'> <p> <b>";

	if($order_status==="Success")
	{
		$apiParam['param'] .= '&txn_id='.$apiParam['txn_id'];
		$apiParam['api'] = str_replace(['https/', 'http/'], ['https://', 'http://'], $apiParam['api']);
		$success = true;
		$apiParam['redirect'] .= '/'.$apiParam['txn_id'];
		echo "<br>Thank you for shopping with us. Your transaction is successful. We will be shipping your order to you soon.";
		
	}
	else if($order_status==="Aborted")
	{
		echo "<br>Thank you for shopping with us.We will keep you posted regarding the status of your order through e-mail";
	
	}
	else if($order_status==="Failure")
	{
		echo "<br>Thank you for shopping with us.However,the transaction has been declined.";
	}
	else
	{
		echo "<br>Security Error. Illegal access detected";
	
	}

	echo '</b>.<br> <span class="loader"></span> Validating order, don\'t close or navigate browser.';

	echo '</p></div>';
?>
<?php if($success): ?>
	<script src="jquery-1.7.2.min.js"></script>
	<script>
		$.get('<?php echo $apiParam['api'].'?'.$apiParam['param']; ?>', function (data, status) {
			setTimeout(() => {
				location.href = '<?php echo $apiParam['redirect']; ?>';
			}, 3000);
		});
	</script>
<?php else: ?>

	<script>
		setTimeout(() => {
			location.href = '<?php echo $apiParam['redirect']; ?>';
		}, 3000);
	</script>

<?php endif; ?>
</body>
</html>