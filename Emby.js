// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: blue; icon-glyph: magic;
if ($request.url.indexOf('mb3admin.com/admin/service/registration/validateDevice') != -1) {
    if($response.status!=200){
        $notification.post("Emby Premiere 已激活", "", "");
        $done({status: 200, headers: $response.headers, body: '{"cacheExpirationDays":999,"resultCode":"GOOD","message":"Device Valid"}' })
    }else{
        $done({})
    }
}else{
    $done({})
}