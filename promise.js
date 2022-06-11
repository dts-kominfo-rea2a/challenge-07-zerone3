const { promiseTheaterIXX, promiseTheaterVGC } = require('./external.js');

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
	try {
		let bacaData1 = await promiseTheaterIXX();
		let bacaData2 = await promiseTheaterVGC();
		let gabung = bacaData1.concat(bacaData2);
    let result = gabung.filter(el => el.hasil === emosi);
    return result.length;
	} catch (err) {
		console.log(err);
	}
};
module.exports = {
	promiseOutput,
};
