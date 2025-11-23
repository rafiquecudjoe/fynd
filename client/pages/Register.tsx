import { useState, useEffect } from 'react';
import { UserPlus, Mail, Lock, User, Phone, MapPin, Calendar, Users, Eye, EyeOff, Check, X, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

type Step = 1 | 2 | 3;

interface ValidationErrors {
  email?: string;
  password?: string;
  confirmPassword?: string;
  fullName?: string;
  phone?: string;
}

function Register() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: '',
    gender: '',
    city: '',
    country: '',
    phone: '',
  });

  // Password strength calculation
  const calculatePasswordStrength = (password: string): number => {
    let strength = 0;
    if (password.length >= 8) strength += 25;
    if (password.length >= 12) strength += 10;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength += 25;
    if (/\d/.test(password)) strength += 20;
    if (/[^a-zA-Z0-9]/.test(password)) strength += 20;
    return Math.min(strength, 100);
  };

  const passwordStrength = calculatePasswordStrength(formData.password);

  const getPasswordStrengthColor = () => {
    if (passwordStrength < 40) return 'bg-red-500';
    if (passwordStrength < 70) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getPasswordStrengthText = () => {
    if (passwordStrength < 40) return 'Weak';
    if (passwordStrength < 70) return 'Medium';
    return 'Strong';
  };

  // Validation functions
  const validateEmail = (email: string): string | undefined => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return 'Email is required';
    if (!emailRegex.test(email)) return 'Please enter a valid email address';
    return undefined;
  };

  const validatePassword = (password: string): string | undefined => {
    if (!password) return 'Password is required';
    if (password.length < 8) return 'Password must be at least 8 characters';
    if (!/(?=.*[a-z])(?=.*[A-Z])/.test(password)) return 'Password must contain uppercase and lowercase letters';
    if (!/\d/.test(password)) return 'Password must contain at least one number';
    return undefined;
  };

  const validateStep = (step: Step): boolean => {
    const newErrors: ValidationErrors = {};

    if (step === 1) {
      if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
      const emailError = validateEmail(formData.email);
      if (emailError) newErrors.email = emailError;
    }

    if (step === 2) {
      const passwordError = validatePassword(formData.password);
      if (passwordError) newErrors.password = passwordError;
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 3) as Step);
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1) as Step);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(3) && acceptedTerms) {
      // Handle registration logic here
      console.log('Register:', formData);
      navigate('/');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof ValidationErrors]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('registerFormData', JSON.stringify(formData));
  }, [formData]);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('registerFormData');
    if (saved) {
      try {
        setFormData(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse saved form data');
      }
    }
  }, []);

  const steps = [
    { number: 1, title: 'Account' },
    { number: 2, title: 'Security' },
    { number: 3, title: 'Details' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent/30 via-white to-primary/10 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-4">
              <UserPlus className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Join Fyndae</h1>
            <p className="text-gray-600">Create your account in 3 easy steps</p>
          </div>

          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center flex-1">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                        currentStep > step.number
                          ? 'bg-primary text-white'
                          : currentStep === step.number
                          ? 'bg-primary text-white ring-4 ring-primary/20'
                          : 'bg-gray-200 text-gray-400'
                      }`}
                    >
                      {currentStep > step.number ? (
                        <CheckCircle2 className="w-5 h-5" />
                      ) : (
                        step.number
                      )}
                    </div>
                    <span
                      className={`text-xs mt-2 font-medium ${
                        currentStep >= step.number ? 'text-primary' : 'text-gray-400'
                      }`}
                    >
                      {step.title}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`h-1 flex-1 mx-2 rounded transition-all ${
                        currentStep > step.number ? 'bg-primary' : 'bg-gray-200'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Step 1: Account Information */}
            {currentStep === 1 && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={`w-full pl-11 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none ${
                        errors.fullName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="John Doe"
                    />
                  </div>
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <X className="w-4 h-4" />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full pl-11 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="you@example.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <X className="w-4 h-4" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Step 2: Security */}
            {currentStep === 2 && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      value={formData.password}
                      onChange={handleChange}
                      className={`w-full pl-11 pr-11 py-3 border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none ${
                        errors.password ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <X className="w-4 h-4" />
                      {errors.password}
                    </p>
                  )}
                  {formData.password && !errors.password && (
                    <div className="mt-2">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-gray-600">Password strength:</span>
                        <span className={`text-xs font-medium ${
                          passwordStrength < 40 ? 'text-red-500' : passwordStrength < 70 ? 'text-yellow-500' : 'text-green-500'
                        }`}>
                          {getPasswordStrengthText()}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-300 ${getPasswordStrengthColor()}`}
                          style={{ width: `${passwordStrength}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm Password <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? 'text' : 'password'}
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className={`w-full pl-11 pr-11 py-3 border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none ${
                        errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <X className="w-4 h-4" />
                      {errors.confirmPassword}
                    </p>
                  )}
                  {formData.confirmPassword && formData.password === formData.confirmPassword && !errors.confirmPassword && (
                    <p className="mt-1 text-sm text-green-500 flex items-center gap-1">
                      <Check className="w-4 h-4" />
                      Passwords match
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Step 3: Personal Details (Optional) */}
            {currentStep === 3 && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-2">
                      Age <span className="text-gray-400">(Optional)</span>
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        id="age"
                        name="age"
                        type="number"
                        min="1"
                        max="150"
                        value={formData.age}
                        onChange={handleChange}
                        className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                        placeholder="25"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-2">
                      Gender <span className="text-gray-400">(Optional)</span>
                    </label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <select
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none appearance-none bg-white"
                      >
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                        <option value="prefer-not-to-say">Prefer not to say</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                      City <span className="text-gray-400">(Optional)</span>
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        id="city"
                        name="city"
                        type="text"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                        placeholder="New York"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                      Country <span className="text-gray-400">(Optional)</span>
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        id="country"
                        name="country"
                        type="text"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                        placeholder="USA"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number <span className="text-gray-400">(Optional)</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="relative flex items-center justify-center mt-0.5">
                      <input
                        type="checkbox"
                        checked={acceptedTerms}
                        onChange={(e) => setAcceptedTerms(e.target.checked)}
                        className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-2 focus:ring-primary focus:ring-offset-0 cursor-pointer"
                      />
                    </div>
                    <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                      I agree to the{' '}
                      <Link to="/terms-and-conditions" className="text-primary hover:text-primary/80 font-semibold">
                        Terms of Service
                      </Link>{' '}
                      and{' '}
                      <Link to="/privacy-policy" className="text-primary hover:text-primary/80 font-semibold">
                        Privacy Policy
                      </Link>
                    </span>
                  </label>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-3 pt-4">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="flex-1 flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 rounded-xl transition-all border-2 border-gray-300"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Back
                </button>
              )}
              
              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Next
                  <ArrowRight className="w-5 h-5" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={!acceptedTerms}
                  className="flex-1 bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  Create Account
                </button>
              )}
            </div>
          </form>

          {/* Footer */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-center text-gray-600">
              Already have an account?{' '}
              <button
                onClick={() => navigate('/login')}
                className="text-primary hover:text-primary/80 font-semibold transition-colors"
              >
                Sign in
              </button>
            </p>
          </div>

          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              Protected by industry-standard security protocols
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
