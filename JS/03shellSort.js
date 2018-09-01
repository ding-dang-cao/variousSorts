// 希尔排序可以理解为对插入排序的优化
// 插入排序每一次交换都是相邻的两个元素，每次只能消除一个逆序对，我们可以跳着交换，这样可能一次
// 可以消除几个逆序对
// 1、外层循环控制着增量序列，增量序列最好采用互质序列（递减至1），我们用一个数组来维护,取1,3,5
// 2、内层循环就是对每一个增量，完成该序列的插入排序
function heapSort(arr) {
	var stepArr = [5,3,1];
	var len = arr.length;
	for(var m = 0;m <= 2;m ++){
		var step = stepArr[m];
		for(var i = m;i <= len-1;i ++){
			var temp = arr[i];
			for(var j = i;j >= step && arr[j-step] > temp;j -= step){
				arr[j] = arr[j-step]
			}
			arr[j] = temp;
		}
	}
	return arr;
}
function createArr(length) {
	var arr = new Array();
	for(i = 0;i < length;i ++) {
		arr[i] = Math.floor(Math.random() * length) + 1;
	}
	return arr;
}
var testArr1 = createArr(100);
console.log(heapSort(testArr1));
// console.log(bubbleSort2(testArr2));
