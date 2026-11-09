import { Reservation } from "./reservation";

export class ReservationVIP extends Reservation{
    public override calculerTotal(): number {
        return super.calculerTotal()*1.2;
    }
}