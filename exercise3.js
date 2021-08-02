  /*  Câu 3: Viết hàm đếm số ký tự nguyên âm trong một chuỗi cho trước. 
    Hàm có 1 tham số truyền vào mà một mảng các ký tự. Hàm trả về false nếu không có ký tự nguyên âm nào. 
    Viết chương trình nhập vào một chuỗi bất kỳ. Gọi hàm tìm số ký tự nguyên âm vừa xây dựng ở trên.
    Nguyên âm là các ký tự: a, o, e, u, i
    Tổng điểm: 15
    Xây dựng hàm: 10
    Sử dụng hàm: 2
    Viết mã sạch: 3 */

    function countChar(str) {
    	let count = 0;
    	for(let i = 0; i < str.length; i++){
    		if(str[i] === "a" || str[i] === "o" || str[i] === "e" || str[i] === "u" || str[i] === "i") {
    			count++;
    		}
    	}
    	if(count !== 0){
    		return "Co " + count + " ky tu nguyen am";
    	}
    	return false;
    }
    
    let str = prompt("nhap vao 1 chuoi bat ky");
    let result = countChar(str);
    alert(result);