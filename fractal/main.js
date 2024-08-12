const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const colors = ["yellow", "red", "blue"];
canvas.width = 700;
canvas.height = 700;

function drawTree(x, y, size, angle, iteration) {
	if (iteration === 0) {
		return;
	}

	const nextSize = (size * Math.sqrt(2)) / 2;
	const x1 = x + size * Math.cos(angle);
	const y1 = y - size * Math.sin(angle);

	ctx.strokeStyle = colors[iteration % 3];
  ctx.lineWidth = 5;
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(x1, y1);
	ctx.stroke();

	const angle1 = angle - Math.PI / 4;
	const angle2 = angle + Math.PI / 4;
	drawTree(x1, y1, nextSize, angle1, iteration - 1);
	drawTree(x1, y1, nextSize, angle2, iteration - 1);
}

function FractalishTree() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	const startX = canvas.width / 2;
	const startY = canvas.height;
	const initialSize = 170;
	const initialAngle = Math.PI / 2;

	drawTree(startX, startY, initialSize, initialAngle, 12);
}

FractalishTree();
// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");
