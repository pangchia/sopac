var direct = "DIRECT" ;
var proxy_primary = "SOCKS5 127.0.0.1:10800" ;
var last_rule = "SOCKS5 127.0.0.1:10800;PROXY 127.0.0.1:10801;DIRECT" ;


function FindProxyForURL(url,host)
{

  if(isPlainHostName(host)){
    return direct;
  }
  
  if(!isResolvable(host)){
    return proxy_primary;
  }
    
  if( 
    shExpMatch(url, "*localhost*") ||
    shExpMatch(url, "*.nextop.*") ||
    shExpMatch(url,"*.baidu.*") || 
    shExpMatch(url,"*.qq.*") || 
    shExpMatch(url,"*.weiyun.*") || 
    shExpMatch(url,"*.163.*") 
  
  ) {
    return direct;
  }
  
  if( shExpMatch(url, "*google*") ||
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
  
    return proxy_primary;
  } 
  
  
  return last_rule;

}