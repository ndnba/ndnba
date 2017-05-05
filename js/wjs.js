$(function(){
    banner();
});
var banner=function(){
    //��ȡԪ��
    //�ֲ�ͼ�����
    var $banner=$('.carousel');
    //������
    var $point=$banner.find('.carousel-indicators');
    //ͼƬ����
    var $image=$banner.find('.carousel-inner');
    //���ڶ���
    var $window=$(window);
    //1.ģ������
    var data=[
        {
            pcSrc:'images/slide_01_2000x410.jpg',
            mSrc:'images/slide_01_640x340.jpg'
        },
        {
            pcSrc:'images/slide_02_2000x410.jpg',
            mSrc:'images/slide_02_640x340.jpg'
        },
        {
            pcSrc:'images/slide_03_2000x410.jpg',
            mSrc:'images/slide_03_640x340.jpg'
        },
        {
            pcSrc:'images/slide_04_2000x410.jpg',
            mSrc:'images/slide_04_640x340.jpg'
        }
    ]

    //��Ⱦ����
    var render=function(){
        //2.�жϵ�ǰ�豸
        var isMobile=$window.width()<768?true:false;
        //3.���ݵ�ǰ�豸������ת����html  ƴ���ַ���
        //3.1������������Ҫ��̬����
        var pointHtml='';
        //3.2ͼƬ����������Ҫ��̬����
        var imageHtml='';
        //����������ƴ��
        $.each(data,function(k,v){  //����ÿһ�����ݵ�����
            //�����ݵ�ƴ��
            pointHtml+= '<li data-target="#carousel-example-generic" data-slide-to="'+k+'" '+(k==0?'class="active"':'')+'></li>\n';
            //ͼƬ���ݵ�ƴ��
            imageHtml+='<div class="item '+(k==0?'active':'')+'">';
            if(isMobile){
                imageHtml+='<a class="m_imageBox" href="#"><img src="'+ v.mSrc+'"/></a>'
            }else{
                imageHtml+='<a class="pc_imageBox" href="#" style="background-image:url('+ v.pcSrc+');"></a>';
            }
            imageHtml+='</div>';
        });

        //4.��Ⱦ��ҳ����  html׷��
        $point.html(pointHtml);
        $image.html(imageHtml);
    }

   // 5.�����ܷ���Ӧ �����豸      ����ҳ��ߴ�ı�������Ⱦ
    $window.on('resize',function(){
        render();
    }).trigger('resize');

    // trigger ��������  resize �¼�  ִ�� render  ҳ����Ⱦ
    //���û���������� �����ʾ��ͼƬ����ʽ

    //6.�ƶ���  �����л�����     �� �һ�
    //ͨ��jquery���԰�touch�¼�
    //ע�⣺��event������û�д����㼯��
    //ע�⣺originalEvent���в��д����㼯��

    var startX=0;
    var distanceX=0;
     var isMove=false; //�ж��Ƿ����ƶ�
    $banner.on('touchstart',function(e){
        startX= e.originalEvent.touches[0].clientX;
    }).on('touchmove',function(e){
        var moveX= e.originalEvent.touches[0].clientX;
        distanceX=moveX-startX;
        isMove=true;
    }).on('touchend',function(e){
        /*���Ƶ�����*/
        /*
         * 1.��������
         * 2.�ƶ��ľ��볬��50px ��Ϊ������
         * */
        if(isMove&&Math.abs(distanceX)>=50){
            /*����*/
            if(distanceX>0){
                $banner.carousel('prev');
            }else{
                $banner.carousel('next');
            }
        }
        //����
        startX = 0;
        distanceX = 0;
        isMove = false;
    })





}