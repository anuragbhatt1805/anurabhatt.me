type input = {
    startDate: Date,
    endDate: Date | "Present",
}

export const calculate = (dates: input[]): number => {
    let totalMonths = 0;
    dates.forEach((date) => {
        const start = new Date(date.startDate);
        const end = date.endDate === "Present" ? new Date() : new Date(date.endDate);
        const diffTime = Math.abs(end.getTime() - start.getTime());
        const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
        totalMonths += diffMonths;
    });
    return totalMonths;
};