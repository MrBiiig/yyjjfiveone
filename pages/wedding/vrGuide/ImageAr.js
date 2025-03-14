import {
	Engine,
	Scene,
	RotatePerspectiveCamera,
	Skybox,
	DirectionalLight,
	MeshBuilder
} from "g3d";

let lx = null,
	ly = null,
	requestId = 0;
class ImageAr {
	constructor(canvas, images, opt) {
		this.canvas = canvas;
		this.images = images;
		this.opt = opt || {
			textureComplete: (image360) => {}
		}
		this.init();
	}

	init() {
		let that = this;
		Engine.prototype.destroy();
		Engine.instance = null;
		that.engine = new Engine(that.canvas);
		that.scene = new Scene(that.engine);
		that.camera = new RotatePerspectiveCamera(that.scene);
		this.camera.alpha = 0;
		this.camera.beta = 0;
		this.camera.radius = 10;
		this.camera.near = 0.001;
		this.camera.far = 2000;
		let cnt = 0;
		let imageListPOsi = ["back", "front", "top", "bottom", "left", "right"]; // 注意图片顺序 后, 前, 上, 下, 左, 右
		let pos = {}


		/*  */
		const light1 = new DirectionalLight(that.scene);
		light1.color = {
			r: 255,
			g: 200,
			b: 200
		};
		light1.direction = {
			x: 1,
			y: 0,
			z: 1
		};
		light1.intensity = 0.8;

		const m1 = MeshBuilder.createPlane(
			that.scene, 6, 4
		);
		m1.position.z = -1;

		const m2 = MeshBuilder.createSphere(
			that.scene, 1
		);
		m2.position.z = 1;


		for (let i = 0; i < this.images.length; i++) {
			let image = this.canvas.createImage();
			pos[imageListPOsi[i]] = image;
			image.onload = () => {
				cnt++;
				if (cnt >= 6) {
					new Skybox(that.scene, pos, 100, true);

					function render() {
						that.scene.render();
						that.requestAnimationFrame(render);
					}
					render();
					that.opt.textureComplete && that.opt.textureComplete(that);
				}
			}
			image.src = this.images[i];
		}



		// // 渲染 需要轮询刷新渲染
		// function render() {
		// 	that.scene.render();
		// 	that.requestAnimationFrame(render);
		// }
		// render();
		// // 渲染初始化 完毕的回调
		// that.opt.textureComplete && that.opt.textureComplete(that);



		/*  */





	}


	touchmove(e) {
		let that = this;
		let x = e.touches[0].clientX;
		let y = e.touches[0].clientY;

		that.camera.alpha += (x - lx) / 5;
		this.camera.beta = that.clamp(-90, 90, this.camera.beta - (y - ly) / 5);
		lx = x;
		ly = y;
	}

	touchstart(e) {
		let that = this;
		let x = e.touches[0].clientX;
		let y = e.touches[0].clientY;
		lx = x;
		ly = y;
	}

	touchend(e) {

	}

	requestAnimationFrame(cb) {
		requestId = this.canvas.requestAnimationFrame(cb);
		// console.log("requestId", requestId);
	}

	cancelAnimationFrame() {
		console.log("requestId", requestId);
		this.canvas.cancelAnimationFrame(requestId);
	}

	clamp(min, max, v) {
		return v < min ? min : v > max ? max : v;
	}
}


export default ImageAr