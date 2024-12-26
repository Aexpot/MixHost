var h_hght = 0; // высота шапки
  var h_mrg = 0;     // отступ когда шапка уже не видна
  $(function(){
   $(window).scroll(function(){
      var top = $(this).scrollTop();
      var elem = $('#nav');
      if (top+h_mrg < h_hght) {
       elem.css('top', (h_hght-top));
      } else {
       elem.css('top', h_mrg);
      }
    });
  });
  
  
function getData(url,divForPlace,onSuccess)
{
    $.ajax({
      url: url,
      cache: false,
      success: function(html){
        if(typeof(divForPlace) != "undefined" && divForPlace!= null)
            divForPlace.html(html);
        if(typeof(onSuccess) != "undefined" && onSuccess != null)
            onSuccess(html);
      }
    });
}
(function($) {
    $.QueryString = (function(a) {
        if (a == "") return {};
        var b = {};
        for (var i = 0; i < a.length; ++i)
        {
            var p=a[i].split('=');
            if (p.length != 2) continue;
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
        }
        return b;
    })(window.location.search.substr(1).split('&'))
})(jQuery);


function setSelectedElementInOption(options,value)
{
options.each(function( index ) {
  if($( this ).val() == value) $( this ).attr("selected","selected");
});

}


function getImageUrl(gp,mapname)
{
    
switch(gp)
        {
            
            case "public": return  "http://image.www.gametracker.com/images/maps/160x120/cs/"+mapname+".jpg";
                
            case "mc_pe":
            case "mcbukkit": return  "http://ds-host.ru/panel/app/templates/default/img/minecraft.jpg"; 
            case "samp": return  "http://ds-host.ru/panel/app/templates/default/img/samp_logo.png";     
            
            case "mta_sa": return  "http://ds-host.ru/panel/app/templates/default/img/mta.jpg";     
            
                
            case "v34": 
            case "css": return  "http://image.www.gametracker.com/images/maps/160x120/css/"+mapname+".jpg";
            
            case "tf2": return  "http://image.www.gametracker.com/images/maps/160x120/tf2/"+mapname+".jpg";
                
            default : return "http://image.www.gametracker.com/images/maps/160x120/css/"+mapname+".jpg";
        }    
    
    
}
function set_cookie ( name, value, expires, path, domain, secure )
{
  var cookie_string = name + "=" + escape ( value );
 
  if ( expires )
  {
    cookie_string += "; expires=" + expires.toGMTString();
  }
 
  if ( path )
        cookie_string += "; path=" + escape ( path );
 
  if ( domain )
        cookie_string += "; domain=" + escape ( domain );
  
  if ( secure )
        cookie_string += "; secure";
  
  document.cookie = cookie_string;
}

function get_cookie ( cookie_name )
{
  var results = document.cookie.match ( '(^|;) ?' + cookie_name + '=([^;]*)(;|$)' );
 
  if ( results )
    return ( unescape ( results[2] ) );
  else
    return null;
}