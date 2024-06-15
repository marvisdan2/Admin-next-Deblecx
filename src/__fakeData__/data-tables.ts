import { nanoid } from 'nanoid'
import { format } from 'date-fns'

const dateOfBirth = format(new Date(2021, 11, 2), 'MMM dd, yyyy')

export const DATA = [
  {
    id: nanoid(6),
    name: 'Lily Collins',
    position: 'Designer',
    team: 10,
    experience: '3 years',
    phone: '+00578115245',
    avatar: '/static/avatar/001-man.svg',
    dateOfBirth,
    email: 'Uilib@gmail.com',
    address: 'Corner View, Sylhet',
    status: 'Full Time',
  },
  {
    id: nanoid(6),
    name: 'Lily Callins',
    position: 'Editor',
    team: 25,
    experience: '2 years',
    phone: '+00578156245',
    avatar: '/static/avatar/002-girl.svg',
    dateOfBirth,
    email: 'editor@gmail.com',
    address: 'Mirpur, Dhaka',
    status: 'Remote',
  },
  {
    id: nanoid(6),
    name: 'Lily Collins',
    position: 'Designer',
    team: 5,
    experience: '5 years',
    phone: '+00578134245',
    avatar: '/static/avatar/003-boy.svg',
    dateOfBirth,
    email: 'desy@gmail.com',
    address: 'New Market, Chittagong',
    status: 'Part Time',
  },
  {
    id: nanoid(6),
    name: 'Selena Smith',
    position: 'Developer',
    team: 11,
    experience: '7 years',
    phone: '+00574115645',
    avatar: '/static/avatar/004-woman.svg',
    dateOfBirth: format(new Date(2021, 10, 5), 'MMM dd, yyyy'),
    email: 'smith@gmail.com',
    address: 'Gulshan, Dhaka',
    status: 'Full Time',
  },
  {
    id: nanoid(6),
    name: 'Lily Collins',
    position: 'Developer',
    team: 17,
    experience: '3 years',
    phone: '+00578115245',
    avatar: '/static/avatar/005-man-1.svg',
    dateOfBirth: format(new Date(2021, 10, 5), 'MMM dd, yyyy'),
    email: 'Uilib@gmail.com',
    address: 'Corner View, Sylhet',
    status: 'Full Time',
  },
  {
    id: nanoid(6),
    name: 'Lily Collins',
    position: 'Designer',
    team: 30,
    experience: '3 years',
    phone: '+00578115245',
    avatar: '/static/avatar/001-man.svg',
    dateOfBirth,
    email: 'Uilib@gmail.com',
    address: 'Corner View, Sylhet',
    status: 'Full Time',
  },
  {
    id: nanoid(6),
    name: 'Lily Callins',
    position: 'Editor',
    team: 22,
    experience: '3 years',
    phone: '+00578115245',
    avatar: '/static/avatar/002-girl.svg',
    dateOfBirth,
    email: 'Uilib@gmail.com',
    address: 'Corner View, Sylhet',
    status: 'Full Time',
  },
  {
    id: nanoid(6),
    name: 'Lily Collins',
    position: 'Designer',
    team: 33,
    experience: '3 years',
    phone: '+00578115245',
    avatar: '/static/avatar/003-boy.svg',
    dateOfBirth,
    email: 'Uilib@gmail.com',
    address: 'Corner View, Sylhet',
    status: 'Full Time',
  },
  {
    id: nanoid(6),
    name: 'Lily Collins',
    position: 'Developer',
    team: 41,
    experience: '3 years',
    phone: '+00578115245',
    avatar: '/static/avatar/004-woman.svg',
    dateOfBirth: format(new Date(2021, 10, 5), 'MMM dd, yyyy'),
    email: 'Uilib@gmail.com',
    address: 'Corner View, Sylhet',
    status: 'Full Time',
  },
  {
    id: nanoid(6),
    name: 'Lily Collins',
    position: 'Developer',
    team: 13,
    experience: '3 years',
    phone: '+00578115245',
    avatar: '/static/avatar/005-man-1.svg',
    dateOfBirth: format(new Date(2021, 10, 5), 'MMM dd, yyyy'),
    email: 'Uilib@gmail.com',
    address: 'Corner View, Sylhet',
    status: 'Full Time',
  },
  {
    id: nanoid(6),
    name: 'Lily Collins',
    position: 'Designer',
    team: 8,
    experience: '3 years',
    phone: '+00578115245',
    avatar: '/static/avatar/001-man.svg',
    dateOfBirth,
    email: 'Uilib@gmail.com',
    address: 'Corner View, Sylhet',
    status: 'Full Time',
  },
  {
    id: nanoid(6),
    name: 'Lily Callins',
    position: 'Editor',
    team: 6,
    experience: '3 years',
    phone: '+00578115245',
    avatar: '/static/avatar/002-girl.svg',
    dateOfBirth,
    email: 'Uilib@gmail.com',
    address: 'Corner View, Sylhet',
    status: 'Full Time',
  },
  {
    id: nanoid(6),
    name: 'Lily Collins',
    position: 'Designer',
    team: 4,
    experience: '3 years',
    phone: '+00578115245',
    avatar: '/static/avatar/003-boy.svg',
    dateOfBirth,
    email: 'Uilib@gmail.com',
    address: 'Corner View, Sylhet',
    status: 'Full Time',
  },
  {
    id: nanoid(6),
    name: 'Lily Collins',
    position: 'Developer',
    team: 17,
    experience: '3 years',
    phone: '+00578115245',
    avatar: '/static/avatar/004-woman.svg',
    dateOfBirth: format(new Date(2021, 10, 5), 'MMM dd, yyyy'),
    email: 'Uilib@gmail.com',
    address: 'Corner View, Sylhet',
    status: 'Full Time',
  },
  {
    id: nanoid(6),
    name: 'Lily Collins',
    position: 'Developer',
    team: 19,
    experience: '3 years',
    phone: '+00578115245',
    avatar: '/static/avatar/005-man-1.svg',
    dateOfBirth: format(new Date(2021, 10, 5), 'MMM dd, yyyy'),
    email: 'Uilib@gmail.com',
    address: 'Corner View, Sylhet',
    status: 'Full Time',
  },
]
