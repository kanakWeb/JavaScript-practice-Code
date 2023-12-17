var info = { Name: 'Kanak', address: 'Rajshahi', phone: '017678904' }
console.log(info)
console.log('Output : ', info.phone)
var proValue = info['Name']
// console.log(proValue)
function Information(Name, address, phone) {
    this.Name = Name;
    this.address = address;
    this.phone = phone;
}
var MyInfo = new Information('Abir', 'Dhaka', '019678904')
console.log(MyInfo);