/* 	Câu 2: Xây dựng hàm trả về vị trí của phần tử cần tìm trong một mảng cho trước 
	(Giả sử tất cả các phần tử trong mảng không giống nhau). Hàm có 2 tham số: số phần tử cần tìm, mảng cho trước. 
	Viết chương trình với một mảng số nguyên được khởi tạo trước. 
	Nhập vào một giá trị bất kỳ, sau đó kiểm tra xem giá trị số nguyên bất kỳ vừa nhập có nằm trong mảng đã nhập hay không. 
	Tổng điểm: 20
	Xây dựng hàm: 10
	Sử dụng vòng lặp: 5
	Sử dụng hàm: 2
	Viết mã sạch: 3
 */
 
 function searchIndex(searchNumber, arr) {
		let index = -1;
		for(let i = 0; i < arr.length; i++) {
			if(arr[i] === searchNumber) {
				return index = i;
			}
		}
		return -1;
	}
 
	let arr = [1,2,3,4,5];
	let searchNumber = parseInt(prompt("Nhap phan tu muon tim kiem"));
	let result = searchIndex(searchNumber, arr);
	if (result !== -1) {
        alert(searchNumber + " Nam o vi tri thu " + result);
    } else {
        alert("Hông tìm đc");
    }