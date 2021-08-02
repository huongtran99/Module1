/* 	Câu 1:  Xây dựng hàm giải phương trình bậc nhất, biết tham số là các hệ số nguyên a, b.
	Hàm trả về nghiệm của phương trình theo tham số đã cho.
	Viết chương trình sử dụng hàm vừa xây dựng để giải phương trình bậc nhất với hệ số a = 5; b = 8.
	Tổng điểm: 15
	Xây dựng hàm: 10  
	Sử dụng hàm: 2
	Viết mã sạch:  3 */
	
	function giaiPtrinhBacNhat(a,b) {
		let x;
		if(a === 0){
			if(b === 0) {
				return "Phuong Trinh Co Vo So Nghiem";
			}else {
				return "Phuong Trinh Vo Nghiem";
			}
		} else { 
			x = -b/a
			return "Phuong Co Nghiem Duy Nhat " + x;
		}
	}
	
	let a = 5;
	let b = 8;
	let result = giaiPtrinhBacNhat(a,b);
	alert(result); 