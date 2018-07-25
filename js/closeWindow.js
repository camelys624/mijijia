function closeWindow() {
    var browserName = navigator.appName;
    var browserVer = parseInt(navigator.appVersion);
    if(browserName == "Microsoft Internet Explorer"){
        var ie7 = (document.all && !window.opera && window.XMLHttpRequest) ? true : false;
        if(ie7){
            window.opener=null;
            window.open('','_self');
            window.close();
        }
        else {
            this.focus();
            self.open = this;
            self.close();
        }
    }else {
        try{
            this.focus();
            self.open = this;
            self.close();
        }catch (e) {
            console.log("something error!!");
        }

        try {
            window.location.href="about:blank";
            window.close();
        }catch (e) {
            console.log("try again")
        }
    }

}