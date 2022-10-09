import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { WalletsContext } from '../../contexts/WalletsContext';

const newWalletFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
});

type = z.infer<typeof newWalletFormSchema>;

export function NewWalletModal() {
  const { createWallet } = useContext(WalletsContext);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { isSubmitting },
  } = useForm<any>({
    resolver: zodResolver(newWalletFormSchema),
  });

  async function handleCreateNewWallet(data: NewWalletFormInputs) {
    const { description, price, category, type } = data;

    await createTransaction({
      description,
      price,
      category,
      type,
    });

    reset();
  }

  return (
    <form onSubmit={handleSubmit(handleCreateNewWallet)}>
      <input type="text" placeholder="Descrição" required {...register('description')} />
      <input type="number" placeholder="Preço" required {...register('price', { valueAsNumber: true })} />
      <input type="text" placeholder="Categoria" required {...register('category')} />
    </form>
  );
}
