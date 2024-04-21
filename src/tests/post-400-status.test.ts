import { sleep, check } from 'k6';
import http from 'k6/http';

export default function () {
	const res = http.post('https://httpbin.org/status/400');
	check(res, {
		'status is 400': () => res.status === 400,
	});
	sleep(1);
}
