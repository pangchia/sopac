function FindProxyForURL(url,host)
{
  if(localHostOrDomainIs(host, "*.nextop.*")
  
  ) {
  
    return "DIRECT";
  }
  
  if(shExpMatch(url,"*.baidu.*") || 
    shExpMatch(url,"*.qq.*") || 
    shExpMatch(url,"*.weiyun.*") || 
    shExpMatch(url,"*.163.*") 
  
  ) {
    return "DIRECT";
  }
  
  if( shExpMatch(url, "*.google.*") ||
     shExpMatch(url, "*.binance.*") ||
     shExpMatch(url, "*.bnbstatic.*") ||
     shExpMatch(url, "*.googletagmanager.*") ||
     shExpMatch(url, "*google-analytics*") ||
     shExpMatch(url, "*github*") ||
     shExpMatch(url, "*.youtube.*") ||
     shExpMatch(url, "*.gstatic.*") ||
     shExpMatch(url, "*.bootstrapcdn.*") ||
     shExpMatch(url, "*.emberobserver.*") ||
     shExpMatch(url, "*ember*") ||
     shExpMatch(url, "*fontawesome*") ||
     shExpMatch(url, "*facebook*") ||
     shExpMatch(url, "*twitter*") ||
     shExpMatch(url, "*slack*") ||
     shExpMatch(url, "*okex*") ||
     shExpMatch(url, "*okx*") ||
     shExpMatch(url, "*trello*") ||
     shExpMatch(url, "*jdk.java.net*") ||
     shExpMatch(url, "*outlook*")
  
  
  ) {
  
    return "qCloud-lubaoqiang-10800-s5";
  } 
  
  
  return "PROXY qCloud-lubaoqiang-10800-s5;PROXY office-proxy2-http;DIRECT";

}