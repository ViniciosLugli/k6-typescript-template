import { sleep, check } from 'k6';
import http from 'k6/http';

const binFile = open('main.jpg', 'b');
const url = `https://httpbin.org/post`;

export default function () {
	const postData = { file: http.file(binFile, 'main.jpg') };
	const res = http.post(url, postData);
	check(res, {
		'status is 200': (r) => r.status === 200,
	});
	sleep(1);
}
