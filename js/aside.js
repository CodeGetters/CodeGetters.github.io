window.addEventListener('load', () => {
	// 1.
	const body = document.querySelector('body');
	const aside = body.querySelector('.aside');
	const toggle = body.querySelector('.side-toggle');
	const searchBtn = body.querySelector('.searchBox');
	// 2.
	const fileInp = body.querySelector('.con-ava');
	const avator = body.querySelector('.avator');

	// 1.点击头像旁的箭头图标实现侧边栏的打开
	toggle.addEventListener('click', () => {
		aside.classList.toggle('close');
	});
	// 再次点击头像旁的箭头图标实现侧边栏的关闭
	searchBtn.addEventListener('click', () => {
		aside.classList.remove('close');
	});

	// 2.点击头像文件上传功能
	avator.addEventListener('click', () => {
		fileInp.click();
	});
});
