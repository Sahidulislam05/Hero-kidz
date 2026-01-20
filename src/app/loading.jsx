import React from 'react';
import Logo from '@/components/layouts/Logo';

const Loading = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-secondary/5 flex items-center justify-center">
            <div className="text-center space-y-8">
                {/* Logo Container with Animation */}
                <div className="relative w-32 h-32 mx-auto">
                    {/* Rotating Background Circle */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-xl opacity-20 animate-spin" 
                         style={{animationDuration: '3s'}}></div>
                    
                    {/* Logo */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="animate-bounce" style={{animationDuration: '2s'}}>
                            <Logo />
                        </div>
                    </div>
                </div>

                {/* Loading Text */}
                <div className="space-y-3">
                    <h2 className="text-3xl font-bold text-gray-900">Loading...</h2>
                    <p className="text-gray-600 text-sm">Please wait while we prepare your experience</p>
                </div>

                {/* Progress Bar Animation */}
                <div className="w-64 h-1 bg-gray-200 rounded-full overflow-hidden mx-auto">
                    <div 
                        className="h-full bg-gradient-to-r from-primary via-secondary to-primary rounded-full"
                        style={{
                            width: '100%',
                            animation: 'slideInfinite 1.5s ease-in-out infinite'
                        }}
                    ></div>
                </div>

                {/* Dots Animation */}
                <div className="flex justify-center gap-2">
                    {[0, 1, 2].map((i) => (
                        <div
                            key={i}
                            className="w-3 h-3 bg-primary rounded-full"
                            style={{
                                animation: `bounce 1.4s infinite ease-in-out`,
                                animationDelay: `${i * 0.16}s`
                            }}
                        ></div>
                    ))}
                </div>

                {/* Fun Messages */}
                <p className="text-xs text-gray-500 italic max-w-xs mx-auto">
                    ✨ Getting everything ready for you...
                </p>

                {/* CSS Animation */}
                <style>{`
                    @keyframes slideInfinite {
                        0% {
                            transform: translateX(-100%);
                        }
                        50% {
                            transform: translateX(100%);
                        }
                        100% {
                            transform: translateX(-100%);
                        }
                    }
                    
                    @keyframes bounce {
                        0%, 80%, 100% {
                            transform: scale(0.8);
                            opacity: 0.5;
                        }
                        40% {
                            transform: scale(1);
                            opacity: 1;
                        }
                    }
                `}</style>
            </div>
        </div>
    );
};

export default Loading;