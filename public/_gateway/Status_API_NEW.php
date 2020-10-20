<?php
error_reporting(0);
$working_key = 'EB779F6C58F2C0FFDD4BC0174F62B0DD'; //Shared by CCAVENUES
$access_code = 'AVBE94HI86AQ56EBQA';

$merchant_json_data =
    array(
		"reference_no" => "225013271813",
    	'order_no' => '33231644'
	
);

$merchant_data = json_encode($merchant_json_data);
$encrypted_data = encrypt($merchant_data, $working_key);
$final_data = 'enc_request='.$encrypted_data.'&access_code='.$access_code.'&command=orderStatusTracker&request_type=JSON&response_type=JSON';
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://apitest.ccavenue.com/apis/servlet/DoWebTrans");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_VERBOSE, 1);
curl_setopt($ch, CURLOPT_HTTPHEADER,['Content-Type: application/json']) ;
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $final_data);
// Get server response ...
$result = curl_exec($ch);
curl_close($ch);
$status = '';
$information = explode('&', $result);

print_r($information);

$dataSize = sizeof($information);
for ($i = 0; $i < $dataSize; $i++) {
    $info_value = explode('=', $information[$i]);
    if ($info_value[0] == 'enc_response') {
	$status = decrypt(trim($info_value[1]), $working_key);
	
    }
}

echo 'Status revert is: ' . $status.'<pre>';
 $obj = json_decode($status);
 print_r($obj);
?>

<?php
//ADD NEW ENCRYPT Function


error_reporting(0);

	function encrypt($plainText,$key)
	{
		$key = hextobin(md5($key));
		$initVector = pack("C*", 0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0e, 0x0f);
		$openMode = openssl_encrypt($plainText, 'AES-128-CBC', $key, OPENSSL_RAW_DATA, $initVector);
		$encryptedText = bin2hex($openMode);
		return $encryptedText;
	}

	function decrypt($encryptedText,$key)
	{
		$key = hextobin(md5($key));
		$initVector = pack("C*", 0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0e, 0x0f);
		$encryptedText = hextobin($encryptedText);
		$decryptedText = openssl_decrypt($encryptedText, 'AES-128-CBC', $key, OPENSSL_RAW_DATA, $initVector);
		return $decryptedText;
	}
	//*********** Padding Function *********************

	 function pkcs5_pad ($plainText, $blockSize)
	{
	    $pad = $blockSize - (strlen($plainText) % $blockSize);
	    return $plainText . str_repeat(chr($pad), $pad);
	}

	//********** Hexadecimal to Binary function for php 4.0 version ********

	function hextobin($hexString) 
   	 { 
        	$length = strlen($hexString); 
        	$binString="";   
        	$count=0; 
        	while($count<$length) 
        	{       
        	    $subString =substr($hexString,$count,2);           
        	    $packedString = pack("H*",$subString); 
        	    if ($count==0)
		    {
				$binString=$packedString;
		    } 
        	    
		    else 
		    {
				$binString.=$packedString;
		    } 
        	    
		    $count+=2; 
        	} 
  	        return $binString; 
    	  }