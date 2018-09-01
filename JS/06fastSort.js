// 快速排序算法：
// 1、选择一个基准元素（主元），将列表分成两个独立的子序列
// 2、对列表重新排序，将所有小于基准值的元素放在基准值的前面，
//    大于pivot的值放在后面
// 3、对比较小的子序列和比较大的子序列重复上述过程
// 优化思路：
// 1、选取主元，一般选第一个元素，但如果第一个元素是最大或最小的
// 元素，会出现一边倒的情况，每一趟都干不了实事；我们选取头中尾
// 三位数，取他们的中位数
// 2、在子集划分的时候，如果元素与主元相等，也要停下来交换，
// 否则，主元可能一直在右端
// 3、对小规模的数据还不如用插入排序，可以设定一个阈值，
// 大于这个值才用快排 
// 快排的特点：
// 每一次根据主元划分完两个子集后，主元呆在了它最应该呆的位置     
// function fastSort(arr) {
// 	if(arr.length == 0) {
// 		return [];
// 	}
// 	var left = [];
// 	var right = [];
// 	var pivot = arr[0]; // 选取第一个元素当主元
// 	for(var i = 1;i < arr.length; i ++) {
// 		if(arr[i] < pivot) {
// 			left.push(arr[i]);
// 		} else {
// 			right.push(arr[i]);
// 		}
// 	}
// 	return fastSort(left).concat(pivot,fastSort(right));
// }
function fastSort(arr,left,right) {
	if(left < right) {
		var pivot = arr[left];// 以第一个数为基准
		i = left ;
		j = right + 1;
		while(true) {
			while(arr[++i] < pivot) {};
			while(arr[--j] > pivot) {};
			if(i < j){
				swap(arr,i,j);				
			} else 
			break;
		}
		swap(arr,left,j);
		fastSort(arr,left,j - 1);
		fastSort(arr,j + 1,right);
	}
	return arr;
}
// 优化：将头中尾三个数的中位数选为主元，并并将主元放在right-1
// 的位置，因为这三个数已经排好序，left和right不用参与排序
// 需要比较的数是left+1到right-2
function fastSort2(arr,left,right) {
	if(left < right) {
		var pivot = selectPivot(arr,left,right);
		var i = left;
		var j = right - 1;
		while(i < j) {
			while(arr[++i] < pivot){};
			while(arr[--j] > pivot){};
			if(i < j) {
				swap(arr,i,j)
			}
		}
		swap(arr,i,right - 1);
		fastSort2(arr,left,i - 1);
		fastSort2(arr,i + 1,right);
	}
	return arr;
}
// 取中位数为主元并并将主元放在right-1的位置 
function selectPivot(arr,left,right) {
	var middle = Math.floor((left + right) / 2);
	if(arr[middle] < arr[left]) {
		swap(arr,left,middle);
	}
	if(arr[right] < arr[left]) {
		swap(arr,right,left);
	}
	if(arr[right] < arr[middle]) {
		swap(arr,right,middle);
	}
	swap(arr,middle,right - 1);
	return arr[right - 1];
}
function swap(arr,index1,index2) {
	var temp = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = temp;
	// 不用temp
	// arr[index1] = arr[index1] + arr[index2];
	// arr[index2] = arr[index1] - arr[index2];
	// arr[index1] = arr[index1] - arr[index2];
}
function createArr(length) {
	var arr = new Array();
	for(i = 0;i < length;i ++) {
		arr[i] = Math.floor(Math.random() * length) + 1;
	}
	return arr;
}
var testArr = createArr(20);
console.log(fastSort2(testArr,0,19));