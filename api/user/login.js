export default function handler(req, res) {
  // Only allow POST method
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { username, password } = req.body;

  // User database (plain passwords – removed BCrypt hashing)
  const users = [
    {
      id: '2619',
      username: 'yasindu',
      email: 'yasindu@example.com',
      telephone: '+94771234567',
      password: '12345',
      roles: ['TempCustomer'],
      isTemporaryPassword: false,
    },
    {
      id: '8108',
      username: 'nimesh',
      email: 'nimesh@example.com',
      telephone: '+94761234566',
      password: '12345',
      roles: ['TempCustomer', 'Employee'],
      isTemporaryPassword: false,
    },
    {
      id: '1122',
      username: 'sachith',
      email: 'sachith@example.com',
      telephone: '+94711234567',
      password: '12345',
      roles: ['Supervisor'],
      isTemporaryPassword: false,
    },
    {
      id: '1111',
      username: 'sameera',
      email: 'sameera@example.com',
      telephone: '+94771234568',
      password: '12345',
      roles: ['Employee', 'Supervisor'],
      isTemporaryPassword: false,   // added explicitly
    },
    {
      id: '1000',
      username: 'admin',
      email: 'admin@example.com',
      telephone: '+94771234555',
      password: 'admin12345',
      roles: ['TempCustomer', 'Employee', 'Supervisor'],
      isTemporaryPassword: false,   // added explicitly
    },
    {
      id: '2896',
      username: 'darsh',
      email: 'darshanr@example.com',
      telephone: '+94771234567',
      password: 'd',
      roles: ['TempCustomer'],
      isTemporaryPassword: false,
    },
  ];

  // Find user by username and password (case‑sensitive, plain text)
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({
      success: false,
      message: 'Invalid username or password',
      data: null,
      errors: ['Authentication failed'],
    });
  }

  // Define screen permissions based on roles
  const getScreensByRoles = (roles) => {
    const screens = new Set();
    if (roles.includes('TempCustomer')) {
      screens.add('INVOICE');
      screens.add('RECEIPT');
    }
    if (roles.includes('Employee')) {
      screens.add('ATTENDANCE');
    }
    if (roles.includes('Supervisor')) {
      screens.add('ATTENDANCE');
      screens.add('SUPERVISOR_SUMMARY');
    }
    return Array.from(screens);
  };

  // Generate a mock JWT access token (in real app use `jsonwebtoken` or `jose`)
  const generateMockToken = (user) => {
    const header = { alg: 'HS256', typ: 'JWT' };
    const payload = {
      sub: user.id,
      username: user.username,
      roles: user.roles,
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + 3600, // 1 hour
    };
    // Encode header and payload as base64url (mock – no signature)
    const encodedHeader = Buffer.from(JSON.stringify(header)).toString('base64url');
    const encodedPayload = Buffer.from(JSON.stringify(payload)).toString('base64url');
    // Fake signature (dummy)
    const signature = 'dummy_signature';
    return `${encodedHeader}.${encodedPayload}.${signature}`;
  };

  const accessToken = generateMockToken(user);
  const expiresAt = new Date(Date.now() + 60 * 60 * 1000).toISOString(); // 1 hour from now

  return res.status(200).json({
    success: true,
    message: 'Login successful',
    data: {
      accessToken: accessToken,
      refreshToken: accessToken, // could be implemented separte one later
      expiresAt: expiresAt,
      user: {
        id: parseInt(user.id, 10), // convert to number as in example
        username: user.username,
        email: user.email,
        roles: user.roles,
        screens: getScreensByRoles(user.roles),
      },
    },
    errors: null,
  });
}