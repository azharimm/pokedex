export const bgColor = (type: string) : string =>  {
    if(type === 'normal') {
        return 'bg-black';
    }
    if(type === 'fighting') {
        return 'bg-red-900';
    }
    if(type === 'flying') {
        return 'bg-blue-300';
    }
    if(type === 'poison') {
        return 'bg-purple-800';
    }
    if(type === 'ground') {
        return 'bg-yellow-900';
    }
    if(type === 'rock') {
        return 'bg-gray-900';
    }
    if(type === 'bug') {
        return 'bg-green-800';
    }
    if(type === 'ghost') {
        return 'bg-indigo-800';
    }
    if(type === 'steel') {
        return 'bg-gray-400';
    }
    if(type === 'fire') {
        return 'bg-red-700';
    }
    if(type === 'water') {
        return 'bg-blue-700';
    }
    if(type === 'grass') {
        return 'bg-green-600';
    }
    if(type === 'electric') {
        return 'bg-yellow-600';
    }
    if(type === 'psychic') {
        return 'bg-pink-600';
    }
    if(type === 'ice') {
        return 'bg-blue-500';
    }
    if(type === 'dragon') {
        return 'bg-red-500';
    }
    if(type === 'dark') {
        return 'bg-gray-900';
    }
    if(type === 'fairy') {
        return 'bg-yellow-700';
    }
    if(type === 'unknown') {
        return 'bg-pink-300';
    }
    if(type === 'shadow') {
        return 'bg-gray-800';
    }
    return 'bg-blue-50';
}