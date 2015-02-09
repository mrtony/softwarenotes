# AngularJS non-blocking notification - toaster

1. �\��: �Ψ���ܦb�{������L�{����ܰT��
2. �̮ۨM��: angularJS animate (angular-animate.js)
3. modue�ӷ�: [AngularJS-Toaster](https://github.com/jirikavi/AngularJS-Toaster)
4. [�i�Ȼs����ܪ�style](http://codeseven.github.io/toastr/demo.html)
5. �[�c�]�p: �Ѧ�John PaPa��design pattern, �Ntoaster��X�bblocks��
6. �ϥΤ覡
	- �bapp module���ۨ�core module.
	- �bcore module��,�`�Jtoaster module
7. �إ�logger factory,�ô���info,warn,error�����A��
8. �ϥήɭn�ޤJ���ɮ�
	- angular.js
	- angular-animate.js
	- toaster.js
	- toaster.css
9. �ϥήɭn�bView��(�q�`�O�bindex.html����body tag�����Ĥ@��)�[�Jtag�~�����notification

```
<toaster-container toaster-options="{'time-out': 0, 'close-button':true, 'animation-class': 'toast-top-center', 'mouseover-timer-stop':true}"></toaster-container>
```
10. �Ntime-out�ݩʳ]��0�h�|�@����ܤ��|����.
11. API�ϥΤ覡

```
        logger.info('message:Test View is displayed','data:only can see in console','title:TEST');
        logger.error('message:Test View is displayed','data:only can see in console','title:TEST');
        logger.warning('message:Test View is displayed','data:only can see in console','title:TEST');
        logger.success('message:Test View is displayed','data:only can see in console','title:TEST');
        logger.wait('message:Test View is displayed','data:only can see in console','title:TEST');
```