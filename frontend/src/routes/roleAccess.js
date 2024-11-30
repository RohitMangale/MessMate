const roleAccess = {
  mess_staff: ["/messdashboard", "/dashboard/addfooditem"], // Pages only for admins
  user: ["/orders", "/checkout", "/userdashboard"], // Pages for users
  guest: ["/login", "/register"], // Pages for guests (unauthenticated users)
};

export default roleAccess;
