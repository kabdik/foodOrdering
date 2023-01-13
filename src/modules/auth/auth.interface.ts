import type { RoleType } from '../user/enums/role.enum';

export interface UserPayload {
  userId: number;
  patientId?: number;
  doctorId?: number;
  role: RoleType | null;
}
