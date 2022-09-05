window.addEventListener('load', () => {
	const body = document.querySelector('body');
	// 第一个输入框
	const uBox = body.querySelector('.userBox');
	const user = uBox.querySelector('.user');
	const ulab = uBox.querySelector('label');
	// 第二个输入框
	const eBox = body.querySelector('.emailBox');
	const email = body.querySelector('.email');
	const elab = eBox.querySelector('label');
	// 第三个输入框
	const pswBox = body.querySelector('.pswBox');
	const psw = body.querySelector('.psw');
	const plab = pswBox.querySelector('label');

	// audio
	const audio = body.querySelector('audio');
	const left = body.querySelector('.left');
	// 1.动画
	// 账户名
	move(user, ulab);
	// 邮箱
	move(email, elab);
	// 密码
	move(psw, plab);

	// 2.移入隐藏移出显示
	left.addEventListener('mouseenter', function () {
		audio.style.display = 'block';
	});
	left.addEventListener('mouseleave', function () {
		audio.style.display = 'none';
	});

	// 移动动画
	function move(obj, lab) {
		obj.addEventListener('focus', function () {
			if (this.value == '') {
				lab.style.transform = 'translateY(-20px)';
			}
		});
		obj.addEventListener('blur', function () {
			if (this.value == '') {
				lab.style.transform = '';
			}
		});
	}
});
