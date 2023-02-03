function FindProxyForURL(url,host)
{
  if(localHostOrDomainIs(host, "*.nextop.*")
  
  ) {
  
    return "DIRECT";
  }
  
  if(host == "*.baidu.*" || 
    host == "*.qq.*" || 
    host == "*.weiyun.*" || 
    host == "*.163.*" || 
    host == "*.baidu.*" || 
    host == "*.baidu.*" || 
    host == "*.baidu.*" || 
    host == "*.baidu.*" || 
    host == "*.baidu.*" || 
  
  ) {
    return "DIRECT";
  }
  
  if( host == "*.google.*" ||
    host == "*.binance.*" ||
    host == "*.bnbstatic.*" ||
    host == "*.google.*" ||
    host == "*.googletagmanager.*" ||
    host == "*.google-analytics.*" ||
    host == "*github*" ||
    host == "*.youtube.*" ||
    host == "*.gstatic.*" ||
    host == "*.bootstrapcdn.*" ||
    host == "*.emberobserver.*" ||
    host == "*.googleapis.*" ||
    host == "*ember*" ||
    host == "*fontawesome*" ||
    host == "*facebook*" ||
    host == "*twitter*" ||
    host == "*slack*" ||
    host == "*okex*" ||
    host == "*okx*" ||
    host == "*trello*" ||
    host == "*jdk.java.net*" ||
    host == "*outlook*" ||
  
  ) {
  
  
    return "qCloud-lubaoqiang-10800-s5";
  } 
  
  
  return "PROXY qCloud-lubaoqiang-10800-s5;PROXY office-proxy2-http;DIRECT";

}