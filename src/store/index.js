import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

let lifeData = {};

try {
	// 尝试获取本地是否存在lifeData变量，第一次启动APP时是不存在的
	lifeData = uni.getStorageSync('lifeData');
} catch (e) {}

// 需要永久存储，且下次APP启动需要取出的，在state中的变量名
let saveStateKeys = ['vuex_user'];

// 保存变量到本地存储中
const saveLifeData = function(key, value) {
	// 判断变量名是否在需要存储的数组中
	if (saveStateKeys.indexOf(key) != -1) {
		// 获取本地存储的lifeData对象，将变量添加到对象中
		let tmp = uni.getStorageSync('lifeData');
		// 第一次打开APP，不存在lifeData变量，故放一个{}空对象
		tmp = tmp ? tmp : {};
		tmp[key] = value;
		// 执行这一步后，所有需要存储的变量，都挂载在本地的lifeData对象中
		uni.setStorageSync('lifeData', tmp);
	}
}
const store = new Vuex.Store({
	state: {
		// 如果上面从本地获取的lifeData对象下有对应的属性，就赋值给state中对应的变量
		// 加上vuex_前缀，是防止变量名冲突，也让人一目了然
		vuex_user: lifeData.vuex_user ? lifeData.vuex_user : {
			name: '明月'
		},
		vuex_token: lifeData.vuex_token ? lifeData.vuex_token : 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJhY2NvdW50X2lkIjoiNWYzZGQ1ZTYzMmQwOTcwZWMzZWI5NzQ3IiwibG9naW5fdHlwZSI6Im1vYmlsZSIsImxvZ2luX3Byb2ZpbGUiOnsidHlwZSI6ImVtcGxveWVlIiwid2VjaGF0Ijoib1VHeGh2N3F0MVVQWDJYc3ZocUFkQ1hDN2YzNCJ9LCJyb290X2ZsYWciOmZhbHNlLCJsb2dpbl9hY2NvdW50IjoiMTg3OTAyMjE1OTEiLCJleHAiOjE1OTg0OTI5NTd9.b3QlfomrJpYUiCRm7Hn-_AU09e4zaQRIEOaJ6aylqdaCHHPTLpc0eKJjN6fKJ-5V7co47jlQjXDLeHaRBO2KoUrEqYjpLWAHS8e7t8tVNnKxucnO9oFBWjgljPYgqwmQi-5acMGAmpllZaHLr0JknV87yat5X7xAkFDeyu88u8qJK01uIlzRGl02KVLocAC3tpIA5pAEbIbx-jGxT-CVoSTF3xHmfB2fQGIblVBhC3y6KF5PWfB0ZAQTBs1k5FERyRn3knHWb0_q7qA1bQ8SaMM5_3bj49BnHAUATr7HmyitsS1hpr2JsFUlLS_b0UBZSW6ntAL8kJdwNS4EDtgyZg',
		// 如果vuex_version无需保存到本地永久存储，无需lifeData.vuex_version方式
		wxAppID: 'wx8d022398061e88cb',
		wxCode: '',
		customLoadText: {
			loadmore: '上拉加载更多...',
			loading: '正在加载中...',
			nomore: '已经没有更多了'
		}
	},
	mutations: {
		$uStore(state, payload) {
			// 判断是否多层级调用，state中为对象存在的情况，诸如user.info.score = 1
			let nameArr = payload.name.split('.');
			let saveKey = '';
			let len = nameArr.length;
			if (len >= 2) {
				let obj = state[nameArr[0]];
				for (let i = 1; i < len - 1; i++) {
					obj = obj[nameArr[i]];
				}
				obj[nameArr[len - 1]] = payload.value;
				saveKey = nameArr[0];
			} else {
				// 单层级变量，在state就是一个普通变量的情况
				state[payload.name] = payload.value;
				saveKey = payload.name;
			}
			// 保存变量到本地，见顶部函数定义
			saveLifeData(saveKey, state[saveKey])
		}
	}
})

export default store
