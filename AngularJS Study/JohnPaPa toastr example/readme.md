# Add toastr(jQuery) non-blocking notification to AngularJS

1. �\��: �Ψ���ܦb�{������L�{����ܰT��
2. �̮ۨM��: jquery
3. modue�ӷ�: [toastr](https://github.com/CodeSeven/toastr)
4. �[�c�]�p: �Ѧ�John PaPa��design pattern, �Ntoaster��X�bblocks��
5. �ϥΤ覡
	- �bapp module���ۨ�core module.
	- �bcore module��,�`�Jtoastr module (�n��constant�ӥ[�Jtoastr�A��)
6. �إ�logger factory,�ô���info,warn,error�����A��
7. �ϥήɭn�ޤJ���ɮ�
	- angular.js
	- jquery.js
	- toastr.js
	- toastr.css
8. API�ϥΤ覡
```
logger.error("message","data","title");
logger.warning("message","data","title");
logger.info("message","data","title");
logger.success("message","data","title");