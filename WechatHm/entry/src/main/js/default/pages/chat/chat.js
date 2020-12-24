export default {
    data: {
        title: 'World'
    },
    onInit(){
        var msg = this.title+this.id;
        console.log("msg:"+msg);
        this.title = msg;
    }
}
