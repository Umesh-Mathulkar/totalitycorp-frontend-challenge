import React from 'react';

interface IFilterSidebarProps {
    categories: string[];
    selectedCategories: string[];
    setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
    selectedRating: number | null;
    setSelectedRating: React.Dispatch<React.SetStateAction<number | null>>;
    selectedMinPrice: number;
    setSelectedMinPrice: React.Dispatch<React.SetStateAction<number>>;
    selectedMaxPrice: number;
    setSelectedMaxPrice: React.Dispatch<React.SetStateAction<number>>;
}

const FilterSidebar = ({
    categories,
    selectedCategories,
    setSelectedCategories,
    selectedRating,
    setSelectedRating,
    selectedMinPrice,
    setSelectedMinPrice,
    selectedMaxPrice,
    setSelectedMaxPrice,
}: IFilterSidebarProps) => {
    const handleCategoryChange = (category: string) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter((cat) => cat !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    const handleRatingChange = (rating: number) => {
        setSelectedRating(rating === selectedRating ? null : rating);
    };
    const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedMinPrice(Number(e.target.value));
    };

    const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedMaxPrice(Number(e.target.value));
    };
    return (
        <div className="p-4 bg-gray-200">
            <div className="mb-4">
                <h2 className="text-lg font-semibold mb-2">Price Range</h2>
                <div className="space-y-2">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Min Price</label>
                        <input
                            type="range"
                            min="0"
                            max="1000" // Adjust the max value according to your needs
                            value={selectedMinPrice}
                            onChange={(e) => setSelectedMinPrice(Number(e.target.value))}
                            className="w-full"
                        />
                        <span className="text-xs text-gray-500">{selectedMinPrice}</span>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Max Price</label>
                        <input
                            type="range"
                            min="0"
                            max="1000" // Adjust the max value according to your needs
                            value={selectedMaxPrice}
                            onChange={(e) => setSelectedMaxPrice(Number(e.target.value))}
                            className="w-full"
                        />
                        <span className="text-xs text-gray-500">{selectedMaxPrice}</span>
                    </div>
                </div>
            </div>
            <div className="mb-4">
                <h2 className="text-lg font-semibold mb-2">Category</h2>
                <ul className="space-y-1">
                    {categories.map((category, index) => (
                        <li key={index}>
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    checked={selectedCategories.includes(category)}
                                    onChange={() => handleCategoryChange(category)}
                                />
                                <span>{category}</span>
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-2">Rating</h2>
                <ul className="space-y-1">
                    <li>
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                checked={selectedRating === 4}
                                onChange={() => handleRatingChange(4)}
                            />
                            <span>4 Stars & Up</span>
                        </label>
                    </li>
                    <li>
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                checked={selectedRating === 3}
                                onChange={() => handleRatingChange(3)}
                            />
                            <span>3 Stars & Up</span>
                        </label>
                    </li>
                    {/* Add more rating options */}
                </ul>
            </div>
        </div>
    );
};

export default FilterSidebar;
