const teslaCars = [
	{name: 'Model S',
	 topSpeed : 322,
	 maxRange : 350,
	 time: 2.1	
	},
	{name: 'Model 3',
	 topSpeed : 261,
	 maxRange : 285,
	 time: 3.3	
	},
	{name: 'Model X',
	 topSpeed : 262,
	 maxRange : 290,
	 time: 2.6	
	},
	{name: 'Model Y',
	 topSpeed : 250,
	 maxRange : 260,
	 time: 3.7	
	},
	{name: 'Cybertruck',
	 topSpeed : 130,
	 maxRange : 250,
	 time: 6.5	
	}
];
const menuBlock = document.querySelector('nav div');
const menuBtn = document.querySelector('header .menu');
const cancelBtn = document.querySelector('nav div .close');
const CarLinks = document.querySelectorAll('li');
const info = document.querySelector('.info');
const header = document.querySelector('header');
const tabQuery = window.matchMedia("(max-width : 768px)");
// const desktopQuery = window.matchMedia("(max-width : 1500px)");

// Sliding Menu
showMenu = () => {
	menuBlock.style.right = '0';
	menuBtn.style.display = 'none';

}

hideMenu = () => {
	menuBlock.style.right = '-50%';
	menuBtn.style.display = 'block';
}


CarLinks.forEach((CarLink, index) => {
	CarLink.addEventListener('click', e => {
		// let index = 1;

		let carInfo = `
			<div>
					<h2>${teslaCars[index].time}s</h2>
					<p>0-62 mph</p>
				</div>

				<div>
					<h2>${teslaCars[index].topSpeed} mph</h2>
					<p>Top Speed</p>
				</div>

				<div>
					<h2>${teslaCars[index].maxRange} mi</h2>
					<p>Max Range</p>
				</div>

				<div class="line"></div>

				<div>
					<h2>${teslaCars[index].name}</h2>
			</div>`;
		

		let generateTemplate = () => {
			info.innerHTML = carInfo;
		}

		// Background Image

		if (index === 1) {
			header.style.backgroundImage = "url('asset/images/image-2.png')";
		}else if (index === 2) {
			header.style.backgroundImage = "url('asset/images/image-3.png')";
		}else if (index === 3) {
			header.style.backgroundImage = "url('asset/images/image-4.png')";
		}else if(index === 4) {
			header.style.backgroundImage = "url('asset/images/cbp.jpg')";	
		} else {
			header.style.backgroundImage = "url('asset/images/image-1.png')";
		}

		generateTemplate();

	});
});



// Media Query

		// if(index === 1 || tabQuery.matches) {
		// 	header.style.backgroundImage = "url('asset/images/model 3 p.jpeg')";
		// } else if(index !== 1 || tabQuery.matches) {
		// 	header.style.backgroundImage = "url('asset/images/image-2.png')";
		// } else {
		// 	console.log('awwn!');
		// }


		
		// if(index === 1 && tabQuery.matches) {
		// 	header.style.backgroundImage = "url('asset/images/model 3 p.jpeg')";
		// } else if(index === 1 && !tabQuery.matches) {
		// 	header.style.backgroundImage = "url('asset/images/image-2.png')";
		// }

		// if(index === 2 && tabQuery.matches) {
		// 	header.style.backgroundImage = "url('asset/images/Model X p.jpeg')";
		// } else {
		// 	header.style.backgroundImage = "url('asset/images/image-3.png')";
		// }

		// let query = (mediaQuery) => {
// 	if(mediaQuery) {
// 			console.log('yes');
// 			// header.style.backgroundColor = "red";
// 	}
// }

// mediaQuery.addEventListener(query);



// Animating the numerical info 
// let output = 0;
			
// let timer = setInterval(() => {

// 				if(output === teslaCars[1].maxRange) {
// 					clearInterval(timer);
// 				} else {
// 					output++;	
// 					return output;
// 				}
// 			}, 10);
// let numeral = timer;
// console.log(numeral)
// console.log(timer)