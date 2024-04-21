import http from 'k6/http';
import { check } from 'k6';

export default function () {
	const url = 'https://test-api.k6.io/user/register/';
	const payload = JSON.stringify({
		first_name: 'John',
		last_name: 'Smith',
		username: `user_${Math.random() * 1000}`,
		password: 'supersecure',
	});

	const params = {
		headers: {
			'Content-Type': 'application/json',
		},
	};

	const response = http.post(url, payload, params);

	check(response, {
		'is status 201': (r) => r.status === 201,
		'body includes user': (r) => typeof r.body === 'string' && r.body.includes('user'),
	});
}
