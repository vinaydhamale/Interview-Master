import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { QuizQuestion } from '@/src/data/topics';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, XCircle, HelpCircle } from 'lucide-react';

interface QuizProps {
  questions: QuizQuestion[];
}

export const QuizComponent: React.FC<QuizProps> = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleSubmit = () => {
    if (selectedOption === null) return;
    setIsSubmitted(true);
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setScore(0);
    setShowResult(false);
  };

  if (showResult) {
    return (
      <Card className="w-full max-w-lg mx-auto">
        <CardContent className="p-8 text-center space-y-6">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex justify-center"
          >
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
              <CheckCircle2 className="w-12 h-12 text-primary" />
            </div>
          </motion.div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Quiz Completed!</h2>
            <p className="text-muted-foreground text-lg">
              You scored <span className="font-bold text-foreground">{score}</span> out of <span className="font-bold text-foreground">{questions.length}</span>
            </p>
          </div>
          <Button onClick={resetQuiz} className="w-full" size="lg">Try Again</Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center px-2">
        <span className="text-[10px] font-bold opacity-50 uppercase tracking-[0.2em]">Question {currentQuestionIndex + 1}/{questions.length}</span>
        <div className="h-1 w-32 bg-white/5 rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-300 shadow-[0_0_8px_rgba(97,218,251,0.5)]" 
            style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="glass-panel p-8 space-y-8">
        <h2 className="text-xl font-bold leading-tight">{currentQuestion.question}</h2>
        
        <RadioGroup 
          value={selectedOption?.toString()} 
          onValueChange={(val) => !isSubmitted && setSelectedOption(parseInt(val))}
          className="space-y-3"
        >
          {currentQuestion.options.map((option, index) => {
            const isCorrect = index === currentQuestion.correctAnswer;
            const isSelected = index === selectedOption;
            
            let variant = "border-white/10 hover:bg-white/5";
            if (isSubmitted) {
              if (isCorrect) variant = "border-green-500 bg-green-500/10 text-green-400";
              else if (isSelected) variant = "border-red-500 bg-red-500/10 text-red-400";
              else variant = "opacity-50 border-white/5";
            } else if (isSelected) {
              variant = "border-primary bg-primary/10 ring-1 ring-primary/50";
            }

            return (
              <div key={index} className={`flex items-center space-x-3 p-4 rounded-xl border transition-all cursor-pointer ${variant}`} onClick={() => !isSubmitted && setSelectedOption(index)}>
                <RadioGroupItem value={index.toString()} id={`q-${index}`} className="sr-only" />
                <Label htmlFor={`q-${index}`} className="flex-1 cursor-pointer font-medium text-sm">
                  {option}
                </Label>
                {isSubmitted && isCorrect && <CheckCircle2 className="w-5 h-5 text-green-500" />}
                {isSubmitted && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-red-500" />}
              </div>
            );
          })}
        </RadioGroup>

        <AnimatePresence>
          {isSubmitted && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              className="p-4 rounded-xl bg-primary/5 border border-primary/20"
            >
              <div className="flex gap-2 text-primary mb-2">
                <HelpCircle className="w-4 h-4 mt-0.5 shrink-0" />
                <span className="font-bold text-[10px] uppercase tracking-widest">Explanation</span>
              </div>
              <p className="text-sm leading-relaxed opacity-80">
                {currentQuestion.explanation}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex justify-end pt-4">
          {!isSubmitted ? (
            <Button onClick={handleSubmit} disabled={selectedOption === null} size="lg" className="w-full sm:w-auto rounded-xl bg-primary text-primary-foreground">
              Submit Answer
            </Button>
          ) : (
            <Button onClick={handleNext} size="lg" className="w-full sm:w-auto rounded-xl bg-primary text-primary-foreground">
              {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
