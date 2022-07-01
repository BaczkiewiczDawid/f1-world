import { Title, Category } from 'components/Dashboard/CategoryTitle.style';

const CategoryTitle = ({ category, article }: Category) => {
    return <Title article={article} category={category}>{category}</Title>
}

export default CategoryTitle