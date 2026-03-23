// BEGIN (write your solution here)
export const getWeekends = (format = 'long') => {
  return format === 'short' ? ['sat', 'sun'] : ['saturday', 'sunday'];
};

// END
