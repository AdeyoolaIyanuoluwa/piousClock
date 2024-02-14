//AUTH API
export const LOGIN_API = "/auth/login";

export const FORGOT_PASSWORD_API = "/auth/forgot-password";

export const VALIDATE_PASSWORD_API = "/auth/verify-reset-token";

export const RESET_PASSWORD_API = "/auth/reset-password";

//USER MANAGEMENT API

export const ADD_MEMBER_API = "admin/signup-member";

export const EDIT_MEMBER_API = ({ id }: { id: string }) => `/admin/${id}`;

export const DELETE_MEMBER_API = ({id}: {id: string})=>`/admin/${id}`;

//MEMBERS CLOCKIN API

export const CLOCK_IN_API = ({ id }: { id: string }) =>
  `/member/clock-in/${id}`;

export const CLOCK_OUT_API = ({ id }: { id: string }) =>
  `/member/clock-out/${id}`;

export const FETCH_RECENT_CLOCKIN_API = "/admin/get-recent-clock-in";

export const FETCH_TOTAL_API = 'admin/get-total'
 
export const FETCH_RECENT_MEMBERS_API ='admin/get-recent-members'
