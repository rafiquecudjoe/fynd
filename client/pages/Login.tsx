import { useState } from 'react';
import { LogIn, Mail, Lock } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isAdmin = email === 'admin@fyndae.com';
    // Handle login logic here
    console.log('Login:', { email, isAdmin });
    // Navigate to dashboard or home after login
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-white to-accent/20 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-4">
              <LogIn className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to Fyndae</h1>
            <p className="text-gray-600">Sign in to help reunite lost items</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-center text-gray-600">
              Don't have an account?{' '}
              <button
                onClick={() => navigate('/register')}
                className="text-primary hover:text-primary/80 font-semibold transition-colors"
              >
                Create one
              </button>
            </p>
          </div>

          <div className="mt-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
            <p className="text-xs text-primary text-center">
              <strong>Demo:</strong> Use admin@gmail.com for admin access
            </p>
          </div>

          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              By continuing, you agree to our{' '}
              <Link to="/terms-and-conditions" className="text-primary hover:underline">
                Terms
              </Link>{' '}
              and{' '}
              <Link to="/privacy-policy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
