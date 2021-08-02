/*Câu 4: 
1/ Xây dựng lớp Animal với các: 
Thuộc tính: tên và cân nặng
Phương thức:
setName(): để thiết đặt giá trị mới cho thuộc tính tên theo giá trị của tham số truyền vào.
setWeight(): để thiết đặt giá trị mới cho thuộc tính cân nặng theo giá trị của tham số truyền vào.
getName(): trả về tên của animal
getWeight(): trả về cân nặng của animal
toString() trả về chuỗi chứa thông tin của tên và cân nặng
2/ Sử dụng lớp Animal vừa định nghĩa để xây dựng một chương trình JavaScript với kịch bản như sau:
Tạo đối tượng  có tên là objAnimal1 
Thiết đặt tên cho đối tượng objAnimal1 là “Elephant”
Thiết đặt cân nặng cho đối tượng objAnimal1 là 45.6
Gọi phương thức toString() 
Tạo đối tượng có tên là objAnimal2 sử dụng phương thức khởi tạo có 2 tham số là tên và cân nặng
Đổi tên cho đối tượng objAnimal2 thành “Mouse”
Tổng điểm: 50
Xây dựng lớp Animal với đầy đủ các thuộc tính: 5
Xây dựng các phương thức của lớp Animal: 10 (mỗi phương thức 2 điểm)
Tạo đối tượng theo yêu cầu: 10
Sử dụng được phương thức của đối tượng theo yêu cầu: 20 (mỗi phương thức 4 điểm)
Viết mã sạch: 5*/


class Animal {
	name;
	weight;
	
	constructor(name, weight) {
		this.name = name;
		this.weight = weight;
	}
	
	setName(name) {
		this.name = name;
	}
	
	setWeight(weight){
		this.weight = weight;
	}
	
	getName() {
		return this.name;
	}
	
	getWeight() {
		return this.weight;
	}
	
	toString() {
		return alert("Name: " + this.name + " , " + "Weight: " + this.weight);
	}
}

let objAnimal1 = new Animal();
objAnimal1.setName("Elephant");
objAnimal1.setWeight(45.6);
objAnimal1.toString();
let objAnimal2 = new Animal("Dog", 100);
objAnimal2.setName("Mouse");
objAnimal2.toString();