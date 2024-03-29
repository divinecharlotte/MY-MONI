import { BookingState, CarState, FuelType } from '../util/api'
import { Action } from './enums'
import { Dayjs } from 'dayjs'
export interface CarDetails {
  id?: number
  name?: string
  owner?: string
  ownerId?: number
  type?: string
  image?: string
  url?: string
}
export interface BookCar {
  carId?: number
  startDate: string | null
  endDate: string | null
}
export interface CarInfo {
  carTypeId: string
  name: string
  fuelType: FuelType
  horsepower: string
  licensePlate: string
  info: string
}

export interface BookingDetails {
  id: number
  name?: string
  image?: string
  action: Action
  user?: string
  startDate: Dayjs
  endDate: Dayjs
  bookingState: BookingState
  carState?: CarState
}
