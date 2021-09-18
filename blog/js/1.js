function angle(cx, cy, ex, ey) {
    var dy = ey - cy;
    var dx = ex - cx;
    var theta = Math.atan2(dy, dx); // range (-PI, PI]
    theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
    //if (theta < 0) theta = 360 + theta; // range [0, 360)
    theta -= 90;
    return theta;
    }
$(document).ready(function(){
    $(document).mousemove(function(event) {
        let mx = event.pageX;
        let my = event.pageY;
        $('.card').each(function(i, obj){
            var offset = $(obj).position();
            var width = $(obj).width();
            var height = $(obj).height();

            var x = offset.left + width / 2;
            var y = offset.top + height / 2;

            let angl = angle(mx,my,x,y);
            console.log(angl);
            $(obj).css('--mouse_ang', angl+'deg');
        });
    });
});
