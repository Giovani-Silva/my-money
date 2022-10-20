import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { WalletsContext } from '../../contexts/WalletsContext';
import { ButtonSumit } from './styles';

const newWalletFormSchema = z.object({
  name: z.string(),
  limit: z.number(),
  cardDigit: z.string(),
  color: z.string(),
});

type NewWalletFormInputs = z.infer<typeof newWalletFormSchema>;

export function NewWalletModal() {
  const { createWallet } = useContext(WalletsContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<any>({
    resolver: zodResolver(newWalletFormSchema),
  });

  async function handleCreateNewWallet(data: NewWalletFormInputs) {
    const { name, limit, cardDigit, color } = data;
    await createWallet({
      name,
      limit,
      cardDigit,
      color,
    });

    reset();
  }

  return (
    <form onSubmit={handleSubmit(handleCreateNewWallet)}>
      <input type="text" placeholder="Nome" required {...register('name')} />
      <input type="number" placeholder="Limite" required {...register('limit', { valueAsNumber: true })} />
      <input type="text" placeholder="Card Digit" required {...register('cardDigit')} />
      <input type="text" placeholder="Cor" required {...register('color')} />
      <ButtonSumit type="submit" disabled={isSubmitting}>
        Save
      </ButtonSumit>
    </form>
  );
}
