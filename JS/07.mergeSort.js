// 1、归并排序思路：将序列不断分成两个子序列，将两个有序的子序列合并；
// 2、具体做法：1、长度为n的序列，分成两个长度为n/2的序列
// 						 2、对这两个子序列进行递归，继续二分，直到len = 1
// 						 3、将两个排序好的子序列合并成最终的序列;
// 划分是从上到下的，合并是从下到上的
function mergeSort(arr) {
	var len = arr.length;
	if(len <= 1) {
		return arr;
	}
	var middle = Math.floor(len / 2);
	var left = arr.slice(0,middle);
	var right = arr.slice(middle);
	return merge(mergeSort(left),mergeSort(right));
}
function merge(left,right) {
	var result = [];
	while(left.length && right.length) {
		if(left[0] <= right[0]) {
			result.push(left.shift());
		}else{
			result.push(right.shift());
		}
	}
	while(left.length) {
		result.push(left.shift());
	}
	while(right.length) {
		result.push(right.shift());
	}
	return result;
}
function createArr(length) {
	var arr = [];
	for(i = 0;i < length;i ++) {
		arr[i] = Math.floor(Math.random() * length) + 1;
	}
	return arr;
}
var testArr = createArr(15);
console.log(mergeSort(testArr));