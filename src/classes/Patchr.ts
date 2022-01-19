import axios from 'axios';

import type { Board, Classroom, Component, Decal, Lesson, Notification, Order, Tracker, User, UserCreateOptions } from '../typings.js';

// set the base URL for all requests
axios.defaults.baseURL = 'https://patchr.io/api/v1';

// don't reject a Promise when the response is a 4xx or 5xx
axios.defaults.validateStatus = () => true;

// set some default headers to the ones used on the official Patchr client
axios.defaults.headers.common['User-Agent'] = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:96.0) Gecko/20100101 Firefox/96.0';
axios.defaults.headers.common.Referer = 'https://patchr.io/';
axios.defaults.headers.common.Origin = 'https://patchr.io';

export default class Patchr {
	user?: User;

	constructor() {

	}

	async authenticate(email: string, password: string) {
		const { data, headers } = await axios.post<{ data: User }>('/auth/login', { username: email, password });

		// @ts-ignore
		axios.defaults.headers.Cookie = headers['set-cookie']![0];

		this.user = data.data;

		// returns a User object on login, and null on failure
		return data.data;
	}

	async createUser(options: Partial<UserCreateOptions>): Promise<User> {
		const { data } = await axios.post<{ data: User }>('/users/create', { data: options });

		// returns a `User` on creation, and null on failure
		return data.data;
	}

	async updateUser(id: string, options: Partial<User>): Promise<User> {
		const { data } = await axios.patch<{ data: User }>(`/users/${id}`, { data: options });

		// returns a `User`
		return data.data;
	}

	async getUser(id: string) {
		const { data } = await axios.get<{ data: User }>(`/users/${id}`);

		// returns a `User`
		return data.data;
	}

	async getAllUsers() {
		console.log(axios.defaults.headers);

		const { data } = await axios.get<{ data: User[] }>('/users');

		// returns an array of `User`s
		return data.data;
	}

	async resetPassword(email: string): Promise<boolean> {
		const { data } = await axios.post<{ success: boolean }>('/auth/reset', { data: { email } });

		// returns boolean representing success
		return data.success;
	}

	async getLessons() {
		const { data } = await axios.get<{ data: Lesson[] }>('/lessons');

		// returns an array of `Lesson`s
		return data.data;
	}

	async getComponents() {
		const { data } = await axios.get<{ data: Component[] }>('/components');

		// returns an array of `Component`s
		return data.data;
	}

	async getDecals() {
		const { data } = await axios.get<{ data: Decal[] }>('/decals');

		// returns an array of `Decal`s
		return data.data;
	}

	async getClassrooms() {
		const { data } = await axios.get<{ data: Classroom[] }>('/classrooms');

		// returns an array of `Classroom`s
		return data.data;
	}

	async getOrders() {
		const { data } = await axios.get<{ data: Order[] }>('/orders');

		// returns an array of `Order`s
		return data.data;
	}

	async getBoards() {
		const { data } = await axios.get<{ data: Board[] }>('/boards');

		// returns an array of `Board`s
		return data.data;
	}

	async getNotifications() {
		const { data } = await axios.get<{ data: Notification[] }>('/notifications');

		// returns an array of `Notification`s
		return data.data;
	}

	async getCurious() {
		const { data } = await axios.get<{ data: Tracker[] }>('/curious');

		// returns an array of tracked events
		return data.data;
	}
}