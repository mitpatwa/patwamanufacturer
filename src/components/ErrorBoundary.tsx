import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sand-50 to-gold-50 p-4"
        >
          <div className="max-w-md w-full text-center">
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100 mb-6"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <AlertTriangle className="h-10 w-10 text-red-600" />
            </motion.div>

            <h1 className="text-2xl font-serif font-semibold text-foreground mb-4">
              Oops! Something went wrong
            </h1>
            
            <p className="text-muted-foreground mb-8">
              We're sorry, but something unexpected happened. Don't worry, our team has been notified.
            </p>

            <div className="space-y-4">
              <motion.button
                onClick={this.handleRetry}
                className="magnetic-button w-full py-3 px-6 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <RefreshCw className="h-4 w-4" />
                <span>Try Again</span>
              </motion.button>

              <motion.a
                href="/"
                className="magnetic-button w-full py-3 px-6 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Home className="h-4 w-4" />
                <span>Go Home</span>
              </motion.a>
            </div>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-8 text-left">
                <summary className="cursor-pointer text-sm text-muted-foreground hover:text-foreground">
                  Error Details (Development)
                </summary>
                <pre className="mt-2 p-4 bg-red-50 border border-red-200 rounded text-xs text-red-800 overflow-auto">
                  {this.state.error.stack}
                </pre>
              </details>
            )}
          </div>
        </motion.div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
