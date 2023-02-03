function FindProxyForURL(url,host)
{
  if(host=="*.baidu.*") return "DIRECT";
  
  
  if(host=="*.google.*") return "qCloud-lubaoqiang-10800-s5";
  
  
  return "PROXY qCloud-lubaoqiang-10800-s5;PROXY office-proxy2-http;DIRECT";

}