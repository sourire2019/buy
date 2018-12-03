
import axios from 'axios'

var MockAdapter = require('axios-mock-adapter');
var mock = new MockAdapter(axios);


mock.onGet('/api/select').reply(200,{
	data : [
		{
			brand: "大众",
			location: "中国上海 ",
			merchantId: "1",
			name: "V6发动机",
			partsId: 0,
			picture: ["src/pages/Buy/components/BrandDisplay/img/logo.png"],
			price: "11.1",
			stock: 3000,
			surplusstock: 2781,
		},{
			brand: "卡迪拉克",
			location: "美国",
			merchantId: "3",
			name: "V8发动机",
			partsId: 1,
			picture: ["src/pages/Buy/components/BrandDisplay/img/logo.png"],
			price: "22.2",
			stock: 4000,
			surplusstock: 991
		},{
			brand: "卡迪拉克",
			location: "美国",
			merchantId: "3",
			name: "V8发动机",
			partsId: 2,
			picture: ["src/pages/Buy/components/BrandDisplay/img/logo.png"],
			price: "22.2",
			stock: 4000,
			surplusstock: 991
		},{
			brand: "卡迪拉克",
			location: "美国",
			merchantId: "3",
			name: "V8发动机",
			partsId: 3,
			picture: ["src/pages/Buy/components/BrandDisplay/img/logo.png"],
			price: "22.2",
			stock: 4000,
			surplusstock: 991
		},{
			brand: "大众",
			location: "中国上海 ",
			merchantId: "1",
			name: "V6发动机",
			partsId: 4,
			picture: ["src/pages/Buy/components/BrandDisplay/img/logo.png"],
			price: "11.1",
			stock: 3000,
			surplusstock: 2781
		},{
			brand: "卡迪拉克",
			location: "美国",
			merchantId: "3",
			name: "V8发动机",
			partsId: 5,
			picture: ["src/pages/Buy/components/BrandDisplay/img/logo.png"],
			price: "22.2",
			stock: 4000,
			surplusstock: 991
		},{
			brand: "卡迪拉克",
			location: "美国",
			merchantId: "3",
			name: "V8发动机",
			partsId: 6,
			picture: ["src/pages/Buy/components/BrandDisplay/img/logo.png"],
			price: "22.2",
			stock: 4000,
			surplusstock: 991
		},{
			brand: "卡迪拉克",
			location: "美国",
			merchantId: "3",
			name: "V8发动机",
			partsId: 7,
			picture: ["src/pages/Buy/components/BrandDisplay/img/logo.png"],
			price: "22.2",
			stock: 4000,
			surplusstock: 991
		}
	]
})


mock.onGet('/api/select/0').reply(200,{
	data : [
		{
			brand: "大众",
			location: "中国上海 ",
			merchantId: "1",
			name: "V6发动机",
			partsId: 0,
			picture: ["src/pages/Buy/components/BrandDisplay/img/logo.png"],
			price: "11.1",
			stock: 3000,
			surplusstock: 2781,
		}
	]
})
mock.onGet('/api/select/1').reply(200,{
	data : [
		{
			brand: "卡迪拉克",
			location: "美国",
			merchantId: "3",
			name: "V8发动机",
			partsId: 1,
			picture: ["src/pages/Buy/components/BrandDisplay/img/logo.png"],
			price: "22.2",
			stock: 4000,
			surplusstock: 991
		}
	]
})
mock.onGet('/api/select/2').reply(200,{
	data : [
		{
			brand: "卡迪拉克",
			location: "美国",
			merchantId: "3",
			name: "V8发动机",
			partsId: 2,
			picture: ["src/pages/Buy/components/BrandDisplay/img/logo.png"],
			price: "22.2",
			stock: 4000,
			surplusstock: 991
		}
	]
})
mock.onGet('/api/select/3').reply(200,{
	data : [
		{
			brand: "卡迪拉克",
			location: "美国",
			merchantId: "3",
			name: "V8发动机",
			partsId: 3,
			picture: ["src/pages/Buy/components/BrandDisplay/img/logo.png"],
			price: "22.2",
			stock: 4000,
			surplusstock: 991
		}
	]
})

mock.onGet('/api/select/4').reply(200,{
	data : [
		{
			brand: "大众",
			location: "中国上海 ",
			merchantId: "1",
			name: "V6发动机",
			partsId: 4,
			picture: ["src/pages/Buy/components/BrandDisplay/img/logo.png"],
			price: "11.1",
			stock: 3000,
			surplusstock: 2781
		}
	]
})

mock.onGet('/api/select/5').reply(200,{
	data : [
		{
			brand: "卡迪拉克",
			location: "美国",
			merchantId: "3",
			name: "V8发动机",
			partsId: 5,
			picture: ["src/pages/Buy/components/BrandDisplay/img/logo.png"],
			price: "22.2",
			stock: 4000,
			surplusstock: 991
		}
	]
})
mock.onGet('/api/select/6').reply(200,{
	data : [
		{
			brand: "卡迪拉克",
			location: "美国",
			merchantId: "3",
			name: "V8发动机",
			partsId: 6,
			picture: ["src/pages/Buy/components/BrandDisplay/img/logo.png"],
			price: "22.2",
			stock: 4000,
			surplusstock: 991
		}
	]
})
mock.onGet('/api/select/7').reply(200,{
	data : [
		{
			brand: "卡迪拉克",
			location: "美国",
			merchantId: "3",
			name: "V8发动机",
			partsId: 7,
			picture: ["src/pages/Buy/components/BrandDisplay/img/logo.png"],
			price: "22.2",
			stock: 4000,
			surplusstock: 991
		}
	]
})

mock.onGet('api')

const select = () =>{
	return axios.get(`/api/select`)
    .then(resp => {
      return resp.data
    }).catch(error => {
      console.error(error)
    })
}

const detail = (id) =>{
	let url = "/api/select/"+id;
	return axios.get(url)
	.then(resp => {
		return resp.data.data[0]
	}).catch(error => {
		console.error(error)
	})
}

const buy = (value) => {
	console.log(value)
	return axios.get('/api/buy')
	.then(resp => {
		return resp.data
	}).catch(error => {
		console.error(error)
	})
}

export default {
  select,
  detail,
  buy
}