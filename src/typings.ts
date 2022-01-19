export type ContentType = 'title' | 'paragraph' | 'media' | 'content'; 
export type AccountLevel = 1 | 2 | 3 | 4 | 5;
export type PinType = 'neutral' | 'gnd' | 'pwr' | 'data';
export type PadType = 'THT' | 'SMD';
export type UnitType = 'OHM' | 'V' | 'uF';
export type ActionType = 'AddComponent' | 'MoveComponent' | 'ConnectComponents' | 'AddLabel' | 'MoveLabel' | 'RotateComponent' | 'EditLabel' | 'RemoveConnection' | 'RotateLabel' | 'RemoveLabelComponent';
export type AttributeType = 'RESISTANCE' | 'VOLTAGE' | 'CAPACITANCE';

export type Point = [ number, number ];

export interface Tracker {
	id: string,
	ip: string,
	action: 'visit' | 'click',
	page: 'home' | 'login' | 'footer' | 'lesson' | 'about' | 'educators' | 'shop',
	section: string | null,
	name: string | null,
	tags: string[],
	createdAt: string
}

export type Address = {
	address1: string,
	address2: string,
	state: string,
	zip: number | string,
	country: string,
	first_name?: string,
	last_name?: string
} | {
	streetOne: string,
	streetTwo: string,
	state: string,
	zip: number | string,
	country: string,
	first_name?: string,
	last_name?: string
};

export interface Notification {
	id: string,
	userId: string,
	level: number,
	message: string,
	readAt: string | null,
	createdAt: string
};

export interface Order {
	id: string,
	classroom: string,
	classroomName: string,
	lesson: string,
	lessonName: string,
	ecommOrderId: string | null,
	deliveryComplete: boolean,
	shippingComplete: boolean,
	shipmentTrackingId: string | null,
	shipmentStatus: string,
	manufactureComplete: boolean,
	manufactureOrderId: string | null,
	manufactureTrackingId: string | null,
	manucatureStatus: string,
	status: string,
	deliveryDate: string | null,
	boardUrls: string[],
	createdBy: string,
	createdAt: string,
	updatedAt: string | null,
	placedAt: string | null
};

export interface ClassroomLesson {
	id: string,
	endDate: string,
	startDate: string
};

export interface Classroom {
	id: string,
	title: string,
	code: string,
	teacher: string,
	createdBy: string,
	lessons: ClassroomLesson[],
	students: string[],
	createdAt: string,
	updatedAt: string | null
};

export interface User {
	id: string,
	ecomm_id: string,
	avatar: string,
	schoolName: string,
	email: string,
	parentEmail: string | null,
	parentConfirmed: boolean,
	requiresParent: boolean,
	skillLevel: number,
	subscribed: boolean,
	confirmed: boolean,
	firstName: string,
	lastName: string,
	subscriptionStartDate: string,
	subscriptionTier: number,
	accountDisabled: boolean,
	lastPaymentDate: boolean,
	createdAt: string,
	updatedAt: string | null,
	shippingAddress: Address,
	billingAddress: Address,
	accountLevel: AccountLevel,
	lessonsProgressData: string[],
	units: string[],
	lessons: string[],
	students: string[],
	teachers: string[],
	clients: string[],
	licenses: string[]
};

export interface UserCreateOptions {
	email: string,
	firstName: string,
	lastName: string,
	password: string,
	parentEmail: string,
	day: number,
	month: number,
	year: number,
	subscribe: boolean,
	schoolName: string,
	code: string,
	level: AccountLevel
};

export interface ContentBlock {
	type: ContentType,
	contents: string
};

export interface ComponentPlacement {
	id: string,
	pos: [ number, number, number ],
	rot: number,
	layer: number
};

export interface BoardConnection {
	end: {
		id: string,
		pin: number
	},
	start: {
		id: string,
		pin: number
	},
	trace: [ number, number, number ][]
};

export interface BoardHistory {
	step: number,
	actionData: [ string, [ number, number, number ] ],
	actionType: ActionType,
	annotation: string
};

export interface Board {
	id: string,
	componentPlacements: ComponentPlacement[],
	connections: BoardConnection[],
	history: BoardHistory[],
	pcdBoard: {
		id: string,
		name: string,
		color: string,
		bounds: {
			maxX: number,
			maxY: number,
			minX: number,
			minY: number,
			width: number,
			height: number
		},
		points: Point[],
		createdAt: string,
		createdBy: string,
		borderColor: string
	},
	layerCount: string,
	decals: Decal[]
};

export interface Pin {
	type: PinType,
	label: string,
	pindex:  number
};

export interface Pad {
	x: number,
	y: number,
	name: string,
	size: [ number, number ],
	type: PadType,
	drill: number,
	shape: string,
	pindex: number
};

export interface Decal {
	id: string,
	name: string,
	src: string,
	points: [ Point[] ],
	lineWidth: number,
	createdBy: string,
	createdAt: string
};

export interface Attribute {
	name: string,
	type: AttributeType,
	unit: UnitType,
	value: number
};

export interface Component {
	id: string,
	name: string,
	description: string,
	assets: {
		src2D: string,
		sec3D: string,
		offsets: {
			pos: [ number, number, number ],
			rot: number,
			scale: number
		},
		inventory: string[],
		srcSymbol: string,
		useColorBand: boolean
	},
	pins: Pin[],
	category: string,
	designator: string,
	attributes: Attribute[],
	package: string,
	footprint: {
		pads: Pad[],
		label: string,
		decals: Decal[],
		labelPlacement: string
	},
	createdBy: string,
	createdAt: string,
	updatedAt: string
};

export interface ComponentPointer {
	id: string,
	count: number
};

export interface LessonStep {
	type: ContentType,
	hints: string[],
	index: number,
	contentBlocks: ContentBlock[]
};

export interface Lesson {
	id: string,
	productId: string | null,
	title: string,
	index: number,
	manufacturable: boolean,
	skillLevel: number,
	steps: LessonStep[],
	description: string,
	assemblyGuide: {
		supplies: string,
		instructions: string
	},
	createdAt: string,
	updatedAt: string,
	createdBy: string,
	components: ComponentPointer[],
	draft: boolean,
	tags: string[],
	thumb: string,
	schematic: string,
	modelBoard: Board
};